const emailTemplateVoluntario = (user) => `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Voluntário</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
        </head>
        <body style="background-color: #F0F0F0;">
          <center>
            <table style="width: 600px; background-color: #F6F5FA; color:#000; vertical-align: middle;" cellpadding="0" cellspacing="0">
              <thead>
                <tr>
                  <th colspan="2">
                    <img src="https://servidor-estatico-eight-murex.vercel.app/banner2.png" alt="banner código certo coders" style="width: 100%;">
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <h1 style="font-family: Rubik, sans-serif; font-size: 24px; font-weight: 400;">
                      Bem-vindo à <strong style="font-weight: 500; color: #D53535;">Código Certo Coders!</strong>
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <hr style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1);" />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px; font-family: Roboto, sans-serif; font-size: 20px; font-weight: 400;">
                    Olá, <strong style="color: #D53535; text-transform: capitalize;">${user.nome}!</strong> <span style="font-size: 24px;">👋</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <h3 style="font-family: Roboto, sans-serif; font-size: 16px; font-weight: 400;">
                      Seja bem-vindo(a) à nossa comunidade!!
                    </h3>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.5em;">
                      Somos apaixonados por tecnologia e comprometidos em usar nossas habilidades
                      para fazer a diferença, trabalhando juntos em projetos que beneficiam 
                      organizações sem fins lucrativos e iniciativas sociais. Aqui, valorizamos
                      a colaboração, o aprendizado e a troca de conhecimentos, e estamos ansiosos
                      para ver as contribuições valiosas que você trará.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.5em;">
                      Para começar sua jornada conosco, complete uma das trilhas de conhecimento
                      disponíveis em nosso repositório no GitHub. Essas trilhas não têm um tempo
                      máximo para finalização, permitindo que você avance no seu próprio ritmo.
                    </p>
                  </td>
                </tr>
                <!-- <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.5em; font-weight: 600;">
                      Para começar sua jornada em nossa comunidade, você só precisa 
                      completar uma das trilhas de conhecimento disponíveis em nosso
                      repositório no GitHub.
                    </p>
                  </td>
                </tr> -->
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.5em;">
                      Ao concluir a trilha escolhida, você estará preparado para colaborar
                      em nossos projetos. Essas trilhas garantem que todos os membros tenham
                      o conhecimento necessário para contribuir efetivamente. Então, escolha
                      a trilha que mais lhe interessa e, ao finalizá-la, estaremos prontos 
                      para integrá-lo em uma de nossas equipes.
                    </p>
                  </td>
                </tr>
                <!-- <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <p style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.5em;">
                      As trilhas são projetadas para garantir que todos os membros tenham 
                      o conhecimento necessário para contribuir efetivamente. Então, 
                      escolha a trilha que mais lhe interessa, siga as instruções e, 
                      assim que terminar, estaremos prontos para integrá-lo em uma das nossas equipes.
                    </p>
                  </td>
                </tr> -->
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <a target="_blank" href="https://github.com/codigocerto/TrilhaFrontEndJR-JUN15" style="width: 100%; display: block; text-decoration: none;">
                      <table style="width: 100%; margin-top: 20px; font-family: Rubik, sans-serif; background-color: #f2f2f2; border-radius: 20px; padding: 20px;" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th style="text-align: start; font-size: 18px; font-weight: 500; color: #D53535;">
                              Trilha Front-End
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="font-size: 20px; line-height: 1.4em; font-weight: 500; color: #000;">
                              Página de Apresentação
                            </td>
                            <td style="text-align: end;">
                              <img src="https://servidor-estatico-eight-murex.vercel.app/arrow2.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.6em; color: #545454; padding-top: 10px;">
                              Este projeto tem como objetivo criar uma página web onde 
                              os candidatos podem se apresentar, compartilhar seus gostos
                              pessoais e explicar por que desejam fazer parte da comunidade
                              Codigo Certo Coders e participar de projetos voluntários.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                </tr>
                
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <a target="_blank" href="https://github.com/codigocerto/TrilhaBackEndJR-JUN15" style="width: 100%; display: block; text-decoration: none;">
                      <table style="width: 100%; margin-top: 20px; font-family: Rubik, sans-serif; background-color: #f2f2f2; border-radius: 20px; padding: 20px;" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th style="text-align: start; font-size: 18px; font-weight: 500; color: #D53535;">
                              Trilha Back-End
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="font-size: 20px; line-height: 1.4em; font-weight: 500; color: #000;">
                              API RESTful
                            </td>
                            <td style="text-align: end;">
                              <img src="https://servidor-estatico-eight-murex.vercel.app/arrow2.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.6em; color: #545454; padding-top: 10px;">
                              Este projeto tem como objetivo desenvolver uma API RESTful
                              para gerenciamento de tarefas, proporcionando funcionalidades
                              de CRUD (Create, Read, Update, Delete) de tarefas, autenticação
                              de usuários e armazenamento dos dados em um banco de dados.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                </tr>
                
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <a target="_blank" href="https://github.com/codigocerto/TrilhaMobileJR-JUN15" style="width: 100%; display: block; text-decoration: none;">
                      <table style="width: 100%; margin-top: 20px; font-family: Rubik, sans-serif; background-color: #f2f2f2; border-radius: 20px; padding: 20px;" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th style="text-align: start; font-size: 18px; font-weight: 500; color: #D53535;">
                              Trilha Mobile
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="font-size: 20px; line-height: 1.4em; font-weight: 500; color: #000;">
                              App de lista de tarefas
                            </td>
                            <td style="text-align: end;">
                              <img src="https://servidor-estatico-eight-murex.vercel.app/arrow2.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.6em; color: #545454; padding-top: 10px;">
                              Este projeto tem como objetivo desenvolver uma API RESTful
                              para gerenciamento de tarefas, proporcionando funcionalidades
                              de CRUD (Create, Read, Update, Delete) de tarefas, autenticação
                              de usuários e armazenamento dos dados em um banco de dados.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                </tr>
                
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <a target="_blank" href="https://github.com/codigocerto/TrilhaFullStackJR-JUN15" style="width: 100%; display: block; text-decoration: none;">
                      <table style="width: 100%; margin-top: 20px; font-family: Rubik, sans-serif; background-color: #f2f2f2; border-radius: 20px; padding: 20px;" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th style="text-align: start; font-size: 18px; font-weight: 500; color: #D53535;">
                              Trilha Full-Stack
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="font-size: 20px; line-height: 1.4em; font-weight: 500; color: #000;">
                              App de lista de tarefas
                            </td>
                            <td style="text-align: end;">
                              <img src="https://servidor-estatico-eight-murex.vercel.app/arrow2.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.6em; color: #545454; padding-top: 10px;">
                              Este projeto tem como objetivo desenvolver uma API RESTful
                              para gerenciamento de tarefas, proporcionando funcionalidades
                              de CRUD (Create, Read, Update, Delete) de tarefas, autenticação
                              de usuários e armazenamento dos dados em um banco de dados.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                </tr>
                
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <a target="_blank" href="https://github.com/codigocerto/TrilhaQaJR-JUN15" style="width: 100%; display: block; text-decoration: none;">
                      <table style="width: 100%; margin-top: 20px; font-family: Rubik, sans-serif; background-color: #f2f2f2; border-radius: 20px; padding: 20px;" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th style="text-align: start; font-size: 18px; font-weight: 500; color: #D53535;">
                              Trilha QA
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="font-size: 20px; line-height: 1.4em; font-weight: 500; color: #000;">
                              Plano de Teste
                            </td>
                            <td style="text-align: end;">
                              <img src="https://servidor-estatico-eight-murex.vercel.app/arrow2.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.6em; color: #545454; padding-top: 10px;">
                              Este projeto tem como objetivo principal desenvolver um 
                              plano de teste simples para o site da comunidade Código 
                              Certo Coders. Este desafio ajudará a avaliar o conhecimento
                              básico em testes de software, incluindo planejamento, 
                              execução e reporte de testes.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                </tr>
                
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <a target="_blank" href="https://github.com/codigocerto/TrilhaDevOpsJR-JUN15" style="width: 100%; display: block; text-decoration: none;">
                      <table style="width: 100%; margin-top: 20px; font-family: Rubik, sans-serif; background-color: #f2f2f2; border-radius: 20px; padding: 20px;" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th style="text-align: start; font-size: 18px; font-weight: 500; color: #D53535;">
                              Trilha DevOps
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="font-size: 20px; line-height: 1.4em; font-weight: 500; color: #000;">
                              Pipeline CI/CD
                            </td>
                            <td style="text-align: end;">
                              <img src="https://servidor-estatico-eight-murex.vercel.app/arrow2.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.6em; color: #545454; padding-top: 10px;">
                              Este projeto tem como objetivo principal introduzir e praticar
                              conceitos fundamentais de DevOps Jr através da implementação 
                              de um pipeline de CI/CD para uma aplicação web simples.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                </tr>

                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <a target="_blank" href="https://github.com/codigocerto/TrilhaDadosJR-JUN15" style="width: 100%; display: block; text-decoration: none;">
                      <table style="width: 100%; margin-top: 20px; font-family: Rubik, sans-serif; background-color: #f2f2f2; border-radius: 20px; padding: 20px;" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th style="text-align: start; font-size: 18px; font-weight: 500; color: #D53535;">
                              Trilha Dados
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="font-size: 20px; line-height: 1.4em; font-weight: 500; color: #000;">
                              Análise de Dados Com Python
                            </td>
                            <td style="text-align: end;">
                              <img src="https://servidor-estatico-eight-murex.vercel.app/arrow2.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.6em; color: #545454; padding-top: 10px;">
                              Este projeto tem como objetivo realizar uma análise básica
                              de dados utilizando Python, explorando um conjunto de dados
                              pré-definido para extrair insights simples através de 
                              estatísticas descritivas e visualizações gráficas.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                </tr>
                
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <a target="_blank" href="https://github.com/codigocerto/TrilhaDesigner-JUN15" style="width: 100%; display: block; text-decoration: none;">
                      <table style="width: 100%; margin-top: 20px; font-family: Rubik, sans-serif; background-color: #f2f2f2; border-radius: 20px; padding: 20px;" cellpadding="0" cellspacing="0">
                        <thead>
                          <tr>
                            <th style="text-align: start; font-size: 18px; font-weight: 500; color: #D53535;">
                              Trilha Design
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="font-size: 20px; line-height: 1.4em; font-weight: 500; color: #000;">
                              UI/ UX de Página para Comunidade
                            </td>
                            <td style="text-align: end;">
                              <img src="https://servidor-estatico-eight-murex.vercel.app/arrow2.png" alt="">
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2" style="font-family: Roboto, sans-serif; font-size: 16px; line-height: 1.6em; color: #545454; padding-top: 10px;">
                              Este projeto tem como objetivo desenvolver a interface de
                              usuário (UI) e a experiência do usuário (UX) de uma página
                              inicial para a comunidade Codigo Certo Coders.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </a>
                  </td>
                </tr>
                
                <tr>
                  <td colspan="2" style="padding: 40px 30px 30px 30px;">
                    <hr style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1);" />
                  </td>
                </tr>
                
                <tr>
                  <td colspan="2" style="padding: 0 30px; font-family: Roboto, sans-serif; font-size: 18px; text-align: start; font-weight: 400;">
                    Conecte-se com a gente e fique sabendo de todas as nossas novidades.
                  </td>
                </tr>

                <tr>
                  <td colspan="2" style="padding: 20px 30px 30px 30px;">
                    <div style="width: 100%; text-align: center;">
                      <a target="_blank" href="https://www.linkedin.com/company/codigocertocoders/" style="text-decoration: none; margin-right: 30px;">
                        <img src="https://servidor-estatico-eight-murex.vercel.app/linkedin.png" alt="">
                      </a>
                      <a target="_blank" href="https://discord.com/invite/y3GHwPvsMK" style="text-decoration: none; margin-right: 30px;">
                        <img src="https://servidor-estatico-eight-murex.vercel.app/discord.png" alt="">
                      </a>
                      <a target="_blank" href="https://chat.whatsapp.com/CDJL6tRT5apLRXW5PWqYLe" style="text-decoration: none; margin-right: 30px;">
                        <img src="https://servidor-estatico-eight-murex.vercel.app/whatsapp.png" alt="">
                      </a>
                      <a target="_blank" href="https://github.com/codigocerto" style="text-decoration: none; margin-right: 30px;">
                        <img src="https://servidor-estatico-eight-murex.vercel.app/github.png" alt="">
                      </a>
                    </div>
                  </td>
                </tr>
              
                <tr>
                  <td colspan="2" style="padding: 0 30px;">
                    <hr style="border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1);" />
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 30px 30px 24px 30px; font-family: Roboto, sans-serif; font-size: 18px; color: #979797;">
                    Este e-mail é oficial da Código Certo Coders.
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 0 30px 40px 30px; font-family: Roboto, sans-serif; font-size: 18px; color: #979797; line-height: 1.4em;">
                    Você recebeu esse e-mail porque optou por receber o formulário de 
                    comunicação da CODIGO CERTO CODERS. Se você não quiser mais receber nossos
                    e-mails, é só <a href="https://equipe04-production.up.railway.app/update-newsletter?email=${user.email}" style="color: #FB2CBF; text-decoration: none;">clicar aqui.</a>
                  </td>
                </tr>

              </tbody>

            </table>
          </center>
        </body>
        </html>
      `;

module.exports = emailTemplateVoluntario;
