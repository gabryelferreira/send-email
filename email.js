
module.exports = `<html xmlns:th="http://www.thymeleaf.org">

<head>

	<style type="text/css">
		@media screen {

			@font-face {
				font-family: 'Open Sans';
				font-style: normal;
				font-weight: 400;
				font-display: swap;
				src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');
				unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
			}
			
			@font-face {
				font-family: 'Open Sans';
				font-style: normal;
				font-weight: 700;
				font-display: swap;
				src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOX-hpOqc.woff2) format('woff2');
				unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
			}

		}

		.globo-tipo-texto-black {
			font-family: 'Open Sans', sans-serif;
			font-weight: bold;
		}


		body {
			margin: 0;
			padding: 0;
			font-family: 'Open Sans', sans-serif;
		}

		button {
			cursor: pointer;
		}

		.main-container {
			position: relative;
			display: block;
			width: 100%;
			margin: auto;
			text-align: center;
			padding: 50px 0;
			box-sizing: border-box;
			border-bottom: 1px solid #aaa;
		}

		.correct-icon-container {
			position: relative;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: auto;
		}

		.correct-icon-container img {
			margin: auto;
			height: 50px;
		}
		
		.main-container h2 {
			position: relative;
			font-size: 20px;
			color: #2C384B;
		}

		.main-container p {
			position: relative;
			margin: 0;
			color: #5B5B5B;
			line-height: 24px;
		}

		.main-container p span.bold {
			font-weight: 700;
		}

		.main-container a.email-why {
			position: relative;
			font-size: 12px;
			color: #5B5B5B;
			font-style: italic;
			text-decoration: none;
		}

		.button-azul {
			padding: 10px 25px;
			border: 1px solid #244c9d;
			color:#fff;
			font-size: 11px;
			border-radius: 2px;
			text-decoration: none;
			font-weight:bold;
			display: inline-block;
		}

		.button-branco {
			padding: 10px 25px;
			border: 1px solid #244c9d;
			color:#244c9d;
			font-size: 11px;
			border-radius: 2px;
			text-decoration: none;
			font-weight:bold;
			display: inline-block;
		}



	</style>
</head>

<body>
	<table cellpadding="0" cellspacing="0" bgcolor="#ffffff" width="600" align="center">
		<tr>
			<td>
				<table width="600" cellpadding="0" cellspacing="0" align="center">
					<tr>
						<td>
							<img src="https://template-email-assets.s3.amazonaws.com/assets/imgs/logo_globosim.png"
								style="margin-top: 30px;" />
							<table width="500" cellpadding="0" cellspacing="0" align="center">
								<tr>
									<td>
			
										<div class="main-container">
			
											<div class="correct-icon-container">
												<img src="https://template-email-assets.s3.amazonaws.com/assets/imgs/correct.png" />
											</div>

											<br />
			
											<h2>UM CLIENTE TE CREDENCIOU NO GLOBO SIM<br /> </h2>
											<p>
												O cliente <span class="bold">Concettuale Cake, CNPJ 31.245.138/0001-84</span> credenciou sua agência
												<span class="bold">Mídia Company, CNPJ 32.456.123/0001-34</span> para representá-lo na compra de mídia na Globo
												e suas afiliadas, por um período de 5 anos, conforme o documento em anexo.
											</p>
											<br />
											<p>
												A Globo vai avaliar a solicitação e você receberá um retorno por e-mail.
											</p>
											<br />
											<p>
												Você vai precisar de uma conta no GloboAds para representar esse cliente. Caso não possua uma conta, cadastre-se
												enquanto aguarda.
											</p>
											<br />
			
											<table width="100%" cellspacing="0" cellpadding="0">
												<tr>
													<td>
														<table align="center" cellspacing="10" cellpadding="0">
															<tr>
																<td style="border-radius: 2px;" bgcolor="#244c9d">
																	<a target="_blank" href="https://aparecenaglobo.com.br" class="button-azul">
																		JÁ TENHO UMA CONTA
																	</a>
																</td>
															</tr>
														</table>
													</td>
												</tr>
												<tr>
													<td>
														<table align="center" cellspacing="0" cellpadding="0">
															<tr>
																<td style="border-radius: 2px;" bgcolor="#fff">
																	<a target="_blank" href="https://aparecenaglobo.com.br" class="button-branco">
																		CRIAR UMA CONTA
																	</a>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</table>

											<br />

											<a target="_blank" href="https://globosim.globo" class="email-why">Por que estou recebendo esse e-mail?</a>
			
										</div>
			
									</td>
								</tr>
							</table>
						</td>
					</tr>

				</table>

				<table align="center" border="0" cellpadding="0" cellspacing="0">
					<tr>
						<td align="center">
							<table align="center" border="0" bgcolor="#F5F7FA" cellpadding="0" cellspacing="0"
								class="display-width" width="600">
								<tr>
									<td align="center" style="padding:0 30px;">
										<table align="center" border="0" cellpadding="0" cellspacing="0"
											class="display-width" width="500">
											<tr>
												<td height="20"></td>
											</tr>
											<tr>
												<td align="center" class="MsoNormal"
													style="color:#666666; font-family:Calibri,sans-serif; font-size:14px; line-height:20px; font-weight:400; letter-spacing:1px;">
													CONHEÇA NOSSOS CANAIS NEGÓCIOS GLOBO:
												</td>
											</tr>
											<tr>
												<td height="20"></td>
											</tr>
											<tr>
												<td align="center">
													<table align="center" border="0" cellpadding="0" cellspacing="0"
														style="width:auto !important;">
														<tr>
															<td align="center">
																<a href="http://globonegocios.globo.com?utm_content=footer_negocios"
																	style="text-decoration:none;"><img
																		src="http://image.relacionamentoglobo.globo.com/lib/fe3f15707564067b771772/m/25/d67bb721-7b8b-4a15-8bf8-9e43d7f12813.png"
																		alt="Negócios" width="30" height="30"
																		style="border:0; padding:0; margin:0;"
																		editable="true" label="32x32x1">
																</a>
															</td>
															<td width="30"></td>
															<td align="center">
																<a href="http://negocios8.redeglobo.com.br/BIP/Paginas/novo.aspx?utm_content=footer_bip"
																	style="text-decoration:none;"><img
																		src="http://image.relacionamentoglobo.globo.com/lib/fe3f15707564067b771772/m/25/17095a57-b7ac-4003-989f-3e6d18828ae5.png"
																		alt="BIP" width="40" height="40&quot;"
																		style="border:0; padding:0; margin:0;"
																		editable="true" label="32x32x2">
																</a>
															</td>
															<td width="30"></td>
															<td align="center">
																<a href="https://globoads.globo.com/?utm_content=footer_globoads"
																	style="text-decoration:none;"><img
																		src="http://image.relacionamentoglobo.globo.com/lib/fe3f15707564067b771772/m/25/53955c78-3021-4c2b-a9bd-78acba58cdf2.png"
																		alt="Globoads" width="80" height="80"
																		style="border:0; padding:0; margin:0;"
																		editable="true" label="32x32x3">
																</a>
															</td>
															<td width="30"></td>
															<td align="center">
																<a href="https://twitter.com/NegociosGlobo"
																	style="text-decoration:none;"><img
																		src="http://image.relacionamentoglobo.globo.com/lib/fe3f15707564067b771772/m/25/2b2d9918-cb1c-40b8-a7be-e8c7f3537c17.png"
																		alt="Twitter" width="30" height="30"
																		style="border:0; padding:0; margin:0;"
																		editable="true" label="32x32x3">
																</a>
															</td>
															<td width="30"></td>
															<td align="center">
																<a href="https://www.instagram.com/negociosglobo/"
																	style="text-decoration:none;"><img
																		src="http://image.relacionamentoglobo.globo.com/lib/fe3f15707564067b771772/m/25/9885012c-00f5-4e1f-af9f-30d3ca7aaa7f.png"
																		alt="Instagram" width="30" height="30"
																		style="border:0; padding:0; margin:0;"
																		editable="true" label="32x32x3">
																</a>
															</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr>
												<td height="10"></td>
											</tr>
										</table>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>

</html>`