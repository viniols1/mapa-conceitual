document.addEventListener('DOMContentLoaded', () => {

    const conceitos = {
        genos: {
            title: 'Génos (Γένος)',
            text: 'Representa a unidade social básica na Grécia Antiga, baseada no parentesco e na linhagem familiar. Era a forma de organização social anterior ao surgimento da Pólis, centrada em um ancestral comum.'
        },
        polis: {
            title: 'Pólis (Πόλις)',
            text: 'A cidade-estado grega. Mais do que um espaço físico, a Pólis era uma comunidade política autônoma de cidadãos. É o berço da democracia e da filosofia, onde a vida pública se sobrepunha à privada.'
        },
        civitas: {
            title: 'Civitas',
            text: 'Conceito romano equivalente à Pólis grega, mas com foco maior no aspecto legal e jurídico. A "Civitas" referia-se ao corpo de cidadãos (cives) e ao conjunto de direitos e deveres que os uniam sob a lei romana.'
        },
        nomos: {
            title: 'Nomos (Νόμος)',
            text: 'Significa "lei", "costume" ou "ordem". Refere-se às leis e convenções sociais que regulam a vida na Pólis. É o princípio ordenador que permite a convivência e a justiça dentro da comunidade cívica.'
        },
        otium: {
            title: 'Otium e Negotium',
            text: 'Conceitos romanos. "Otium" é o tempo de lazer, dedicado à contemplação, ao estudo, à filosofia e ao espírito (ideal valorizado). "Negotium" é o tempo de negócio, dedicado às atividades públicas, comerciais e ao trabalho (visto como uma necessidade).'
        },
        metropole: {
            title: 'Metrópole (Μητρόπολις)',
            text: 'Originalmente, a "cidade-mãe" (meter + polis) grega, que fundava colônias. Hoje, o termo refere-se a uma grande cidade que polariza uma vasta região, concentrando poder econômico, político e cultural.'
        },
        territorio: {
            title: 'Cidade-Território',
            text: 'Um conceito moderno que descreve a dissolução das fronteiras claras entre cidade e campo. Refere-se à urbanização difusa, onde a cidade se espalha pelo território, formando redes urbanas extensas e complexas.'
        },
        inteligentes: {
            title: 'Cidades Inteligentes e Sustentáveis',
            text: 'O ideal contemporâneo de organização urbana. Utiliza tecnologia (TICs) para otimizar serviços e infraestrutura (Inteligente) ao mesmo tempo que busca minimizar o impacto ambiental e garantir qualidade de vida (Sustentável).'
        }
    };

    const nodes = document.querySelectorAll('.node');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close-btn');

    function abrirModal(id) {
        const info = conceitos[id];
        if (info) {
            modalTitle.textContent = info.title;
            modalText.textContent = info.text;
            modalOverlay.style.display = 'flex';
        }
    }

    function fecharModal() {
        modalOverlay.style.display = 'none';
    }

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            abrirModal(node.id);
        });
    });

    closeBtn.addEventListener('click', fecharModal);

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            fecharModal();
        }
    });
});