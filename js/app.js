// 1. Configuração dos Servidores (Mantemos sua lista para a interface)
const servers = [
    { id: 'gh-01', name: 'GitHub Services', type: 'External API' },
    { id: 'srv-02', name: 'Banco de Dados (Oracle)', ip: '10.0.0.5', type: 'Database' },
    { id: 'srv-03', name: 'API de Automação (n8n)', ip: '192.164.1.25', type: 'Service' },
];

// 2. A "Antena": Busca o status real do GitHub via Fetch API
async function getGitHubStatus() {
    try {
        // O fetch vai até o servidor do GitHub buscar o JSON de status
        const response = await fetch('https://www.githubstatus.com/api/v2/status.json');
        const data = await response.json();
        
        // Traduzimos o 'indicator' do GitHub para o nosso sistema de cores
        // 'none' significa que está tudo bem (Operante)
        return {
            descricao: data.status.description,
            status: data.status.indicator === 'none' ? 'online' : 'warning'
        };
    } catch (error) {
        console.error("Erro na telemetria:", error);
        return { descricao: "Sem conexão com API", status: 'offline' };
    }
}

// 3. O "Pincel": Cria o HTML do card (mesma lógica que você já tinha)
const createServerCard = (server, realData = null) => {
    // Se tivermos dados reais (do GitHub), usamos eles. Se não, usamos valores padrão.
    const statusText = realData 
        ? (realData.status === 'online' ? 'Operante' : 'Alerta')
        : 'Processando...';
    
    const displayStatus = realData ? realData.status : 'offline';
    const description = realData ? realData.description : 'Sincronizando dados...';

    return `
        <article class="server-card">
            <div class="card-header">
                <h2>${server.name}</h2>
                <span class="status-badge ${displayStatus}">${statusText}</span>
            </div>
            <div class="card-body">
                <div class="metric">
                    <span class="metric-label">Provedor</span>
                    <span class="metric-value">${server.type}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Status da Rede</span>
                    <span class="metric-value">${description}</span>
                </div>
            </div>
        </article>
    `;
};

// 4. O "Cérebro": Atualiza o Dashboard
const updateDashboard = async () => {
    const gridContainer = document.getElementById('server-grid');
    const globalStatus = document.getElementById('global-status');
    
    try {
        globalStatus.textContent = 'Consultando APIs externas...';
        
        // Buscamos o dado real do GitHub
        const ghRealData = await getGitHubStatus();
        
        // Geramos o HTML. O primeiro card recebe os dados reais!
        const htmlContent = servers.map((server, index) => {
            if (index === 0) {
                return createServerCard(server, { 
                    status: ghRealData.status, 
                    description: ghRealData.descricao 
                });
            }
            // Os outros cards ficam como estáticos por enquanto
            return createServerCard(server, { status: 'online', description: 'Sistema estável' });
        }).join('');
        
        gridContainer.innerHTML = htmlContent;
        globalStatus.textContent = 'Monitoramento Ativo';
        globalStatus.style.color = 'var(--success)';

    } catch (error) {
        globalStatus.textContent = 'Erro no Dashboard';
        globalStatus.style.color = 'var(--danger)';
    }
};

// 5. Inicialização
document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    // Atualiza a cada 1 minuto (60000ms) para respeitar os limites da API
    setInterval(updateDashboard, 60000);
});