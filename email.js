
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

		.simulador-midia-form-background-always {
			background-color: #f3f3f3;
			overflow: hidden;
		}

		#status-producao-video {
			position: relative;
			left: 0;
			top: 0;
			min-height: 100vh;
			width: 100%;
			max-width: 100%;
			background: #ccc;
		}

		.status-video-wrapper {
			background: #fff;
			box-sizing: border-box;
			padding: 20px 30px 30px;
		}

		.header-status-producao-video {
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

		.header-status-producao-video h2 {
			font-size: 21px;
			margin: 40px 0 0;
			color: #2C384B;
		}

		.header-status-producao-video p {
			font-size: 18px;
			text-align: center;
			color: #555;
			margin: 10px 0 0;
		}

		.status-place-percentage {
			position: relative;
			width: 100%;
			max-width: 400px;
			height: 6px;
			display: flex;
			background: #aaa;
			align-items: center;
		}

		.percentage-1 {
			margin: 20px auto 0;
		}

		.percentage-2 {
			margin: 0 auto 70px;
			background: transparent !important;
			max-width: 510px;
		}

		.percentage-from-status {
			position: relative;
			height: 100%;
			width: 100%;
		}

		.percentage-from-status:first-child,
		.percentage-from-status:last-child {
			width: 50%;
		}

		.percentage-from-status p {
			margin-top: 15px;
			font-size: 10px;
			width: 100%;
			line-height: 12px;
			text-align: center;
		}

		.percentage-from-status:not(:last-child) {
			flex: 1;
		}

		.custom-ball {
			width: 56px;
			height: 16px;
			border-radius: 50%;
			background: #aaa;
		}

		.percentage-from-status:last-child {
			width: 10px;
		}

		.filled {
			background: #244c9d;
		}

		#status-producao-video .btn-finalizar-compra {
			margin-top: 20px;
			font-size: 14px;
			padding-left: 50px;
			padding-right: 50px;
		}


		.header-resumo-video {
			position: relative;
			width: 100%;
		}

		.header-resumo-video h2 {
			margin: 0;
			padding: 0;
			width: 50%;
		}

		.header-resumo-video h2 {
			color: #2C384B;
			font-size: 16px;
			font-weight: bolder;
		}

		.footer-status-producao-video img {
			height: 25px;
		}

		.button-azul-auto {
			background: #244c9d;
			border-radius: 3px;
			padding: 10px 25px;
			color: white;
			/*font-family: GlobotipoTexto-Bold;*/
			font-size: 11px;
			border: 0;
			height: auto !important;
			width: auto !important;
		}


		.cupom-card {
			position: relative;
			padding: 10px 15px;
			box-sizing: border-box;
		}

		.cupom-card p {
			position: relative;
			margin: 0;
			padding: 0;
			margin-bottom: 5px;
			color: #2C384B;
			font-size: 14px;
		}

		.cupom-card p span {
			font-family: 'Open Sans', sans-serif;
			font-weight: bold;
		}

		.cupom-card .cupom img {
			height: 110px;
		}

		.texto-item {
			font-weight: bold;
			color: #2C384B;
			font-size: 14px;
			text-align: left;
		}

		.texto-item span {
			font-weight: normal;
		}

		.header-dados-campanha {
			position: relative;
		}

		.header-dados-campanha p {
			margin-top: 15px;
			margin-bottom: 0;
			color: #888;
		}

		.header-dados-campanha h2 {
			font-size: 16px;
			margin: 10px 0;
		}

		.font-weight-bold {
			font-weight: bold;
		}

		.text-align-right {
			text-align: right;
		}

		.text-small {
			font-size: 12px;
		}

		.table-programas tr td {
			font-size: 14px;
		}

		.dados-campanha-container {
			position: relative;
		}

		.dados-campanha-container tr td {
			font-size: 14px;
			color: #2C384B;
		}

		.container-border-bottom-price {
			position: relative;
			width: 100%;
			padding: 5px 25px;
			border-bottom: 1px solid #000;
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
							<img src="https://template-email-assets.s3.amazonaws.com/assets/imgs/logo_negocios_globo.png"
								style="margin-top: 30px;" />

							<div class="header-status-producao-video">

								<div class="correct-icon-container">
									<img src="https://template-email-assets.s3.amazonaws.com/assets/imgs/correct.png" />
								</div>

								<h2> SEU PEDIDO FOI REALIZADO COM SUCESSO! <br /> </h2>
								<p>Você pode acompanhar a exibição dos seus comerciais clicando em Meus Pedidos.</p>

								<br />
								<p>
									O número do seu pedido é
								</p>

								<h1 style="margin: 10px 0 0 0; padding: 0; color: #2C384B; margin-bottom: 15px; font-size: 28px;">
									PEDIDO7915456
								</h1>

								<br />

								<table width="100%" cellspacing="0" cellpadding="0">
									<tr>
										<td>
											<table align="center" cellspacing="0" cellpadding="0">
												<tr>
													<td style="border-radius: 2px;" bgcolor="#244c9d">
														<a target="_blank" href="https://aparecenaglobo.com.br"
															style="padding: 10px 25px; border: 1px solid #244c9d;color:#fff;font-size: 11px;border-radius: 2px;color:white; font-weight: bold; text-decoration: none;text-decoration: none;font-weight:bold;display: inline-block;">
															IR PARA MEUS PEDIDOS
														</a>
													</td>
												</tr>
											</table>
										</td>
									</tr>
								</table>

							</div>

							<table width="600" cellpadding="0" cellspacing="0">

								<div class="header-resumo-video">
									<h2 style="margin-top: 25px; margin-bottom: 10px;">RESUMO DO PEDIDO</h2>
								</div>

								<table class="simulador-midia-form-background-always" width="600" cellpadding="8">

									<tr>
										<td width="60" align="center">
											<img
												src="https://template-email-assets.s3.amazonaws.com/assets/icons/campanha_icon.png" />
										</td>
										<td>
											<p class="texto-item">NOME DA CAMPANHA: <span>Campanha XPTO</span></p>
										</td>
									</tr>

									<tr>
										<td width="60" align="center">
											<img
												src="https://template-email-assets.s3.amazonaws.com/assets/icons/objetivo_icon.png" />
										</td>
										<td>
											<p class="texto-item">OBJETIVO DA CAMPANHA: <span>Anúncio de Oferta</span>
											</p>
										</td>
									</tr>

									<tr>
										<td width="60" align="center">
											<img
												src="https://template-email-assets.s3.amazonaws.com/assets/icons/seu_publico_icon.png" />
										</td>
										<td>
											<p class="texto-item">SEU PÚBLICO: <span>Homens e mulheres de 24 a 44 anos,
													classes C e D</span></p>
										</td>
									</tr>

									<tr>
										<td width="60" align="center">
											<img
												src="https://template-email-assets.s3.amazonaws.com/assets/icons/duracao_icon.png" />
										</td>
										<td>
											<p class="texto-item">DURAÇÃO DO COMERCIAL: <span>30 segundos</span></p>
										</td>
									</tr>

									<tr>
										<td width="60" align="center">
											<img
												src="https://template-email-assets.s3.amazonaws.com/assets/icons/exibidora_icon.png" />
										</td>
										<td>
											<p class="texto-item">EXIBIDORA: <span>Itapetininga - TV TEM</span></p>
										</td>
									</tr>

								</table>


							</table>

							<table width="600" bgcolor="#ffffff" cellpadding="20">
								<tr>
									<td></td>
								</tr>
							</table>

							<table width="600" cellpadding="0" cellspacing="0" bgcolor="#fff" style="box-shadow: 0 7px 4px #000;">

								<tr>
									<td>
										<table width="600" cellpadding="0" cellspacing="0">
											<tr>
												<td style="padding: 10px 25px;">
													<div class="header-dados-campanha">
														<p>Dados do anunciante</p>
														<h2>NOME DA EMPRESA DO CIDADÃO - 31.245.138/0001-84</h2>
													</div>
												</td>
											</tr>
										</table>
									</td>
								</tr>


								<!-- Início Tabela Programas e período -->
								<tr>
									<td>
										<table class="dados-campanha-container" cellpadding="0" cellspacing="0">
											<tr>
												<!-- Início Tabela Lado Esquerdo -->
												<td style="vertical-align: top;">
													<table width="300" cellpadding="0" cellspacing="0">
														<tr>
															<td style="padding: 8px 25px;">Período de exibição da
																campanha:</td>
														</tr>
														<tr>
															<td style="padding: 15px 25px;" class="font-weight-bold">7
																comerciais de 30 segundos:
															</td>
														</tr>
														<tr>
															<td style="padding: 8px 25px;">Jornal da Globo - 2
																comerciais</td>
														</tr>
														<tr>
															<td style="padding: 8px 25px;">Mais Você - 1 comercial</td>
														</tr>
														<tr>
															<td style="padding: 8px 25px;">Jornal Nacional - 1 comercial
															</td>
														</tr>
														<tr>
															<td style="padding: 8px 25px;">Supercine - 1 comercial</td>
														</tr>
													</table>
												</td>
												<!-- Fim Tabela Lado Esquerdo -->


												<!-- Início Tabela Lado Direito -->
												<td style="vertical-align: top;">
													<table width="300" cellpadding="0" cellspacing="0">
														<tr>
															<td style="padding: 8px 25px; font-weight: bold;"
																class="text-align-right">
																02/03/2020 - 18/03/2020
															</td>
														</tr>
														<tr>
															<td style="padding: 23px 25px;"
																class="text-align-right font-weight-bold">
															</td>
														</tr>
														<tr>
															<td style="padding: 10px 25px; text-decoration: line-through;"
																class="text-align-right">R$ 10.000,00</td>
														</tr>
														<tr>
															<td style="padding: 0 25px; color: #409804;"
																class="text-align-right">
																Desconto de R$ 2.000,00 (20%)
															</td>
														</tr>
														<tr>
															<td style="padding: 10px 25px;" class="text-align-right">R$
																8.000,00</td>
														</tr>
														<tr>
															<td><br /></td>
														</tr>
													</table>
												</td>
												<!-- Fim Tabela Lado Direito -->
											</tr>
										</table>
									</td>
								</tr>
								<!-- Fim Tabela Programas e período -->

								<tr>
									<td>
										<table style="padding-top: 30px;">
										</table>
									</td>
								</tr>

								<!-- Início Tabela Preço Vídeo -->
								<tr>
									<td>
										<table class="dados-campanha-container" cellpadding="0" cellspacing="0">
											<tr>
												<!-- Início Tabela Lado Esquerdo -->
												<td style="vertical-align: top;">
													<table width="300" cellpadding="0" cellspacing="0">
														<tr>
															<td style="padding: 5px 25px;">Criação de vídeo:</td>
														</tr>
														<tr>
															<td style="padding: 5px 25px 15px;"
																class="font-weight-bold">Comercial da Padaria
															</td>
														</tr>
													</table>
												</td>
												<!-- Fim Tabela Lado Esquerdo -->


												<!-- Início Tabela Lado Direito -->
												<td style="vertical-align: top;">
													<table width="300" cellpadding="0" cellspacing="0">
														<tr>
															<td style="padding: 8px 25px 4px; text-decoration: line-through;"
																class="text-align-right">R$ 250,00</td>
														</tr>
														<tr>
															<td style="padding: 0 25px; color: #409804;"
																class="text-align-right">
																Grátis
															</td>
														</tr>
													</table>
												</td>
												<!-- Fim Tabela Lado Direito -->
											</tr>
										</table>
									</td>
								</tr>
								<!-- Fim Tabela Preço Vídeo -->

								<tr>
									<td>
										<table style="border-bottom: 1px solid #ccc;" width="550" align="center"></table>
									</td>
								</tr>


								<!-- Início Tabela Preço Final -->
								<tr>
									<td>
										<table class="dados-campanha-container" cellpadding="0" cellspacing="0">
											<tr>
												<!-- Início Tabela Lado Esquerdo -->
												<td style="vertical-align: top;">
													<table width="400" cellpadding="0" cellspacing="0">
														<tr>
															<td
																style="padding: 15px 25px; color: #777; font-size: 12px;">
																Você receberá nos próximos dias as notas fiscais dos
																serviços prestados.
																Poderão ser emitidas duas notas fiscais, à depender dos
																meses de exibição
																do seu comercial.
															</td>
														</tr>
													</table>
												</td>
												<!-- Fim Tabela Lado Esquerdo -->


												<!-- Início Tabela Lado Direito -->
												<td style="vertical-align: top;">
													<table width="200" cellpadding="0" cellspacing="0">
														<tr>
															<td style="padding: 15px 25px 4px 0;"
																class="text-align-right font-weight-bold">
																Total R$ 8.000,00
															</td>
														</tr>
														<tr>
															<td style="padding: 0 25px 4px 0; color: #777; font-size: 12px;"
																class="text-align-right">
																Pago em 2x R$ 1.000,00
															</td>
														</tr>
														<tr>
															<td style="padding: 0 25px 4px; color: #777; font-size: 12px;"
																class="text-align-right">
																Cartão <span class="font-weight-bold">VISA</span> final <span class="font-weight-bold">5644</span>
															</td>
														</tr>
														<tr><td><br/></td></tr>
													</table>
												</td>
												<!-- Fim Tabela Lado Direito -->
											</tr>
										</table>
									</td>
								</tr>
								<!-- Fim Tabela Preço Final -->

								<tr>
									<td>
										<table class="cupom-card" width="600" cellpadding="0" cellspacing="0">

											<tr class="cupom">
												<td width="100">
													<img
														src="https://template-email-assets.s3.amazonaws.com/assets/imgs/pagamento-cupom.png" />
												</td>
												<td class="cupom-info">
													<p><span>PARABÉNS!</span></p>
													<p>Você ganhou um cupom no valor de <span class="boardit">R$
															249,90</span> <span class="boardit"></span></p>
													<p>Código do cupom: <span>10CUP</span></p>
												</td>
											</tr>
		
										</table>
									</td>
								</tr>


								

							</table>

							<table style="padding-top: 40px;">
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