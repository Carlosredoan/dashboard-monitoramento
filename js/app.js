// 1. Estado da Aplicação (Configurações simulando um banco de dados)
const servers = [
    { id: 'srv-01', name: 'Cluster Principal (Swarm)', ip: '192.164.1.10', type: 'Production' },
    { id: 'srv-02', name: 'Banco de Dados (Oracle)', ip: '10.0.0.5', type: 'Database' },
    { id: 'srv-03', name: 'API de Automação (n8n)', ip: '192.164.1.25', type: 'Service' },
    { id: 'srv-04', name: 'Servidor de Testes', ip: '127.0.0.1', type: 'Staging' },
    { id: 'srv-05', name: 'Backup (AWS S3)', ip: '54.231.16.1', type: 'Backup' }
];

// 2. Função para simular o tráfego de rede e uso de CPU (Gera dados falsos realistas)
const fetchServerMetrics = async () => {
    // Simula um delay de rede (como se estivesse buscando da nuvem)
    return new Promise((resolve) => {
        setTimeout(() => {
            const metrics = servers.map(server => {
                // Sorteia números para simular carga
                const cpuUsage = Math.floor(Math.random() * 100);
                const ramUsage = (Math.random() * 16).toFixed(1);
                
                // Define o status baseado na CPU
                let status = 'online';
                if (cpuUsage > 85) status = 'warning';
                if (cpuUsage > 95) status = 'offline';

                return { ...server, cpuUsage, ramUsage, status };
            });
            resolve(metrics);
        }, 500); // 500ms de delay
    });
};

// 3. Função que cria o HTML do cartão (Usa Template Strings avançadas)
const createServerCard = (serverData) => {
    const { name, ip, cpuUsage, ramUsage, status } = serverData; // Destructuring
    
    // Converte o status para o texto que vai aparecer na tela
    const statusText = status === 'online' ? 'Operante' : status === 'warning' ? 'Alerta' : 'Falha';

    return `
        <article class="server-card">
            <div class="card-header">
                <h2>${name}</h2>
                <span class="status-badge ${status}">${statusText}</span>
            </div>
            <div class="card-body">
                <div class="metric">
                    <span class="metric-label">Endereço IP</span>
                    <span class="metric-value">${ip}</span>
                </div>
                <div class="metric">
                    <span class="metric-label">Uso de CPU</span>
                    <span class="metric-value" style="color: ${cpuUsage > 85 ? 'var(--danger)' : 'inherit'}">
                        ${cpuUsage}%
                    </span>
                </div>
                <div class="metric">
                    <span class="metric-label">Uso de RAM</span>
                    <span class="metric-value">${ramUsage} GB / 16 GB</span>
                </div>
            </div>
        </article>
    `;
};

// 4. Função Principal (Controller) - Atualiza a tela
const updateDashboard = async () => {
    const gridContainer = document.getElementById('server-grid');
    const globalStatus = document.getElementById('global-status');
    
    try {
        globalStatus.textContent = 'Atualizando métricas...';
        
        // Busca os dados (espera a Promise resolver)
        const metrics = await fetchServerMetrics();
        
        // Transforma a lista de dados em código HTML e junta tudo num texto só
        const htmlContent = metrics.map(createServerCard).join('');
        
        // Injeta o HTML gerado na tela de uma vez só (melhor para performance)
        gridContainer.innerHTML = htmlContent;
        globalStatus.textContent = 'Sistemas Operantes';

    } catch (error) {
        console.error('Erro ao buscar métricas da infraestrutura:', error);
        globalStatus.textContent = 'Erro de Conexão';
        globalStatus.style.color = 'var(--danger)';
    }
};

// 5. Inicialização
// Executa a primeira vez assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
    updateDashboard();
    
    // Define um ciclo infinito para atualizar os dados a cada 3 segundos
    setInterval(updateDashboard, 3000);
});