import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email, phone, productInterest, message } = body

    // Validación básica
    if (!name || !company || !email || !message || !productInterest) {
      return NextResponse.json(
        { error: 'Nombre, empresa, email, producto de interés y mensaje son requeridos' },
        { status: 400 }
      )
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Configuración del transporter SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Verificar conexión SMTP
    await transporter.verify()

    // Mapeo de productos de interés
    const productInterestMap: Record<string, string> = {
      lingote: 'Lingote',
      barras: 'Barras',
      otros: 'Otros',
    }
    const productInterestLabel = productInterest ? productInterestMap[productInterest] || productInterest : ''

    // Configurar el email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'info@fugisa.com.ar',
      replyTo: email,
      subject: `Nuevo mensaje de contacto - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
          <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6; padding: 20px;">
            <tr>
              <td align="center">
                <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px 40px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 0.5px;">
                        FUGISA
                      </h1>
                      <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.95;">
                        Fundiciones Giacobbe S.A.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="margin: 0 0 30px 0; color: #111827; font-size: 20px; font-weight: 600; border-bottom: 3px solid #dc2626; padding-bottom: 12px;">
                        Nuevo mensaje de contacto
                      </h2>
                      
                      <!-- Contact Information -->
                      <div style="background-color: #f9fafb; border-radius: 8px; padding: 24px; margin-bottom: 24px; border: 1px solid #e5e7eb;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 8px 0; color: #374151; font-size: 14px; font-weight: 600; width: 140px;">Nombre:</td>
                            <td style="padding: 8px 0; color: #111827; font-size: 14px;">${name}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #374151; font-size: 14px; font-weight: 600;">Empresa:</td>
                            <td style="padding: 8px 0; color: #111827; font-size: 14px;">${company}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #374151; font-size: 14px; font-weight: 600;">Email:</td>
                            <td style="padding: 8px 0;">
                              <a href="mailto:${email}" style="color: #dc2626; text-decoration: none; font-size: 14px; font-weight: 500;">${email}</a>
                            </td>
                          </tr>
                          ${phone ? `
                          <tr>
                            <td style="padding: 8px 0; color: #374151; font-size: 14px; font-weight: 600;">Teléfono:</td>
                            <td style="padding: 8px 0; color: #111827; font-size: 14px;">${phone}</td>
                          </tr>
                          ` : ''}
                          ${productInterestLabel ? `
                          <tr>
                            <td style="padding: 8px 0; color: #374151; font-size: 14px; font-weight: 600;">Producto de interés:</td>
                            <td style="padding: 8px 0;">
                              <span style="display: inline-block; background-color: #dc2626; color: #ffffff; padding: 4px 12px; border-radius: 4px; font-size: 13px; font-weight: 500;">${productInterestLabel}</span>
                            </td>
                          </tr>
                          ` : ''}
                        </table>
                      </div>
                      
                      <!-- Message -->
                      <div style="margin-bottom: 24px;">
                        <h3 style="margin: 0 0 12px 0; color: #374151; font-size: 16px; font-weight: 600;">Mensaje:</h3>
                        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #dc2626; border-radius: 4px; border: 1px solid #e5e7eb;">
                          <p style="margin: 0; color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                        </div>
                      </div>
                      
                      <!-- Action Button -->
                      <table role="presentation" style="width: 100%; border-collapse: collapse; margin-top: 24px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; background-color: #dc2626; color: #ffffff; text-decoration: none; padding: 12px 32px; border-radius: 6px; font-weight: 600; font-size: 14px;">
                              Responder al cliente
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 24px 40px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; text-align: center;">
                        Este mensaje fue enviado desde el formulario de contacto de 
                        <a href="https://www.fugisa.com.ar" style="color: #dc2626; text-decoration: none;">fugisa.com.ar</a>
                      </p>
                      <p style="margin: 0; color: #9ca3af; font-size: 11px; text-align: center;">
                        Fecha: ${new Date().toLocaleString('es-AR', { 
                          timeZone: 'America/Argentina/Buenos_Aires',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      text: `
Nuevo mensaje de contacto desde fugisa.com.ar

Nombre: ${name}
Empresa: ${company}
Email: ${email}
${phone ? `Teléfono: ${phone}` : ''}
${productInterestLabel ? `Producto de interés: ${productInterestLabel}` : ''}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de fugisa.com.ar
Fecha: ${new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })}
      `,
    }

    // Enviar el email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al enviar email:', error)
    
    // Manejo de errores específicos
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Error de autenticación SMTP. Verifique las credenciales.' },
          { status: 500 }
        )
      }
      if (error.message.includes('ECONNREFUSED')) {
        return NextResponse.json(
          { error: 'No se pudo conectar al servidor SMTP. Verifique la configuración.' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor, intente nuevamente más tarde.' },
      { status: 500 }
    )
  }
}
