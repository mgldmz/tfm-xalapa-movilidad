// ── DATOS POR MAPA ──────────────────────────────────────────
// Cada mapa tiene su URL y sus métricas para el panel derecho

const BASE_URL = 'https://mgldmz.github.io/tfm-xalapa-movilidad/mapas/';

const MAPAS = {

    // DIAGNÓSTICO
    red: {
        url: BASE_URL + 'mapa_red_completa.html',
        metricas: [
            { valor: '88',    label: 'Rutas disponibles',     sub: 'de 162 en el Mapatón', tipo: '' },
            { valor: '16.1',  label: 'Longitud promedio',     sub: 'kilómetros por ruta', tipo: '' },
            { valor: '104s',  label: 'Tiempo entre paradas',  sub: 'Estándar BRT: 30–90s', tipo: 'warning' },
        ]
    },

    densidad: {
        url: BASE_URL + 'mapa_densidad_poblacional.html',
        metricas: [
            { valor: '439k',  label: 'Habitantes mapeados',   sub: '92% del total municipal', tipo: 'success' },
            { valor: '183',   label: 'AGEBs analizados',      sub: 'INEGI Censo 2020', tipo: '' },
            { valor: '65k',   label: 'Zona más densa',        sub: 'habitantes · Centro-Sur', tipo: 'danger' },
            { valor: '36k',   label: 'Coapexpan / Los Sauces',sub: 'Sin cobertura de Atenas', tipo: 'warning' },
            { valor: '55k',   label: 'Lomas Verdes',          sub: 'Cobertura parcial', tipo: 'warning' },
        ]
    },

    cobertura: {
        url: BASE_URL + 'mapa_cobertura.html',
        metricas: [
            { valor: '60.9%', label: 'Área con cobertura', sub: 'Incluye zonas no habitadas · radio 400m', tipo: 'success' },            { valor: '39.1%', label: 'Área sin cobertura',    sub: 'Incluye zonas no habitadas', tipo: 'danger' },
            { valor: '400m',  label: 'Radio de análisis',     sub: 'Estándar ONU-Habitat', tipo: '' },
            { valor: '7',     label: 'Zonas críticas',        sub: 'de 12 zonas analizadas', tipo: 'danger' },
            { valor: '1,361m',label: 'Zona más alejada',      sub: 'Tlalnelhuayocan', tipo: 'danger' },
            { valor: '✅', label: 'Cobertura base sólida', sub: 'El reto es eficientizar, no expandir desde cero', tipo: 'success' },
        ]
    },

    solapamiento: {
        url: BASE_URL + 'mapa_solapamiento.html',
        metricas: [
            { valor: '42',    label: 'Solapamiento máximo',   sub: 'rutas en un punto · eps=30m', tipo: 'danger' },
            { valor: '81',    label: 'Zonas críticas',        sub: 'más de 10 rutas solapadas', tipo: 'danger' },
            { valor: '938',   label: 'Clusters totales',      sub: 'DBSCAN · eps=30m', tipo: '' },
            { valor: '4.2',   label: 'Solapamiento promedio', sub: 'rutas por cluster', tipo: 'warning' },
            { valor: '731',   label: 'Accidentes 2014',       sub: 'Lázaro Cárdenas - corredor crítico', tipo: 'danger' },
        ]
    },

    clasificacion: {
        url: BASE_URL + 'mapa_tronco_alimentador.html',
        metricas: [
            { valor: '55',    label: 'Saturadoras',           sub: '62% · congestión centro', tipo: 'danger' },
            { valor: '18',    label: 'Alimentadoras',         sub: '20% · periféricas', tipo: 'success' },
            { valor: '15',    label: 'Troncos',               sub: '17% · corredores principales', tipo: '' },
            { valor: '0.40',  label: 'Silhouette Score',      sub: '+48.7% vs modelo inicial', tipo: 'success' },
            { valor: 'K=3',   label: 'Clusters óptimos',      sub: 'Solapamiento + distancia centro', tipo: '' },
        ]
    },

    // PROPUESTA
    alt4: {
        url: BASE_URL + 'mapa_alt4_combinada.html',
        metricas: [
            { valor: '#1',    label: 'Centro-Sur',            sub: 'Score 1.607 · 3 fuentes', tipo: 'accent' },
            { valor: '#2',    label: 'Av. Xalapa / SEFIPLAN', sub: 'Score 1.028 · nodo Atenas', tipo: 'accent' },
            { valor: '10',    label: 'Nodos identificados',   sub: 'ranking combinado', tipo: '' },
            { valor: '4',     label: 'Metodologías',          sub: 'solapamiento + población + generadores', tipo: '' },
        ]
    },

    alternativas: {
        url: BASE_URL + 'mapa_comparativa_alternativas.html',
        metricas: [
            { valor: 'Alt 1', label: 'Por solapamiento',      sub: 'Infraestructura existente · 30%', tipo: '' },
            { valor: 'Alt 2', label: 'Por población',         sub: '439k hab · INEGI 2020 · 30%', tipo: '' },
            { valor: 'Alt 3', label: 'Por generadores',       sub: '19 puntos · 6 categorías · 40%', tipo: '' },
            { valor: 'Alt 4', label: 'Combinación',           sub: 'Score ponderado · top 10', tipo: 'accent' },
        ]
    },

    atenas: {
        url: BASE_URL + 'mapa_comparativo_atenas.html',
        metricas: [
            { valor: '5',     label: 'Rutas Atenas',          sub: 'Sistema 2026', tipo: '' },
            { valor: '4/5',   label: 'Corredores atendidos',  sub: 'de los identificados', tipo: 'success' },
            { valor: '5/10',  label: 'Nodos coincidentes',    sub: 'con nuestro análisis', tipo: 'success' },
            { valor: 'SEFIPLAN',  label: 'Nodo principal',        sub: '4 rutas convergen · R1+R2+R4+R5', tipo: 'accent' },
        ]
    },

    intersecciones: {
        url: BASE_URL + 'mapa_intersecciones_atenas.html',
        metricas: [
            { valor: '18',    label: 'Intersecciones',        sub: 'entre rutas de Atenas', tipo: '' },
            { valor: '1',     label: 'Nodo máximo',           sub: '4 rutas coinciden · SEFIPLAN', tipo: 'accent' },
            { valor: '15',    label: 'Nodos 2 rutas',         sub: 'media prioridad', tipo: '' },
            { valor: 'Aprobación',    label: 'Validación cruzada',    sub: 'datos confirman decisión gubernamental', tipo: 'success' },
        ]
    },
};


// ── NAVEGACIÓN PRINCIPAL (tabs) ─────────────────────────────

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;

        // Activar botón
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Mostrar panel
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        document.getElementById('tab-' + tabId).classList.add('active');
    });
});


// ── NAVEGACIÓN LATERAL (mapas) ──────────────────────────────

document.querySelectorAll('.side-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const mapaKey   = btn.dataset.map;
        const tabTarget = btn.dataset.tabTarget;

        // Activar botón dentro de su tab
        const siblingBtns = btn.closest('.side-menu').querySelectorAll('.side-btn');
        siblingBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Cambiar iframe
        const iframeId = tabTarget === 'diagnostico' ? 'main-map' : 'propuesta-map';
        const panelId  = tabTarget === 'diagnostico' ? 'metrics-panel' : 'propuesta-metrics-panel';

        const iframe = document.getElementById(iframeId);
        const panel  = document.getElementById(panelId);

        if (MAPAS[mapaKey]) {
            iframe.src = MAPAS[mapaKey].url;
            renderMetrics(panel, MAPAS[mapaKey].metricas);
        }
    });
});


// ── RENDER DE MÉTRICAS ──────────────────────────────────────

function renderMetrics(panel, metricas) {
    panel.innerHTML = '';

    metricas.forEach((m, i) => {
        // Separador entre métricas (no antes de la primera)
        if (i > 0) {
            const div = document.createElement('div');
            div.className = 'panel-divider';
            panel.appendChild(div);
        }

        const card = document.createElement('div');
        card.className = 'panel-metric';
        card.innerHTML = `
            <div class="pm-value ${m.tipo}">${m.valor}</div>
            <div class="pm-label">${m.label}</div>
            <div class="pm-sub">${m.sub}</div>
        `;
        panel.appendChild(card);
    });
}


// ── INICIALIZACIÓN ──────────────────────────────────────────
// Carga las métricas del primer mapa de cada tab al abrir la página

document.addEventListener('DOMContentLoaded', () => {
    // Diagnóstico — métricas iniciales (red de rutas)
    const panelDiag = document.getElementById('metrics-panel');
    if (panelDiag) renderMetrics(panelDiag, MAPAS.red.metricas);

    // Propuesta — métricas iniciales (alt4)
    const panelProp = document.getElementById('propuesta-metrics-panel');
    if (panelProp) renderMetrics(panelProp, MAPAS.alt4.metricas);
});


