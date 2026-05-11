.PHONY: install dev build preview clean

# Instala as dependências do projeto
install:
	npm install

# Roda o servidor de desenvolvimento local
dev:
	npm run dev

# Gera o build de produção
build:
	npm run build

# Visualiza o build de produção localmente
preview:
	npm run preview

# Limpa a pasta dist e node_modules (opcional)
clean:
	rm -rf dist
	rm -rf node_modules
