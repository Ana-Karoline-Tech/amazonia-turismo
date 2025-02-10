-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Cliente (
codgo_cliente VARCHAR(10) PRIMARY KEY,
mensagem VARCHAR(10),
telefone NUMERIC(10),
email VARCHAR(10),
nome VARCHAR(10)
)

CREATE TABLE Pacote (
codgo_Pacote VARCHAR(10) PRIMARY KEY,
tipo_de pagamento NUMERIC(10),
tipo_de pacote VARCHAR(10)
)

CREATE TABLE Destino (
codgo destino VARCHAR(10) PRIMARY KEY,
data_volta SMALLDATETIME,
data_ida DATETIME,
cidade VARCHAR(10),
codgo_Pacote VARCHAR(10),
FOREIGN KEY(codgo_Pacote) REFERENCES Pacote (codgo_Pacote)
)

CREATE TABLE contrata (
codgo_Pacote VARCHAR(10),
codgo_cliente VARCHAR(10),
FOREIGN KEY(codgo_Pacote) REFERENCES Pacote (codgo_Pacote),
FOREIGN KEY(codgo_cliente) REFERENCES Cliente (codgo_cliente)
)

