# FORBROW — Landing Page (Yousense)

Landing page de conversão do produto FORBROW, soro para sobrancelhas da Yousense.

## Como testar

Abra `index.html` diretamente no Chrome. Não precisa de servidor — os assets CSS e JS são arquivos locais com caminhos relativos.

---

## Estrutura de arquivos

```
forbrow-landing/
├── index.html          ← HTML principal (todas as sections)
├── css/
│   └── styles.css      ← Todo o CSS da página
├── js/
│   └── main.js         ← JavaScript (scroll progress + reveal animations + sticky CTA)
└── README.md
```

---

## Sections da página (em ordem)

| ID / elemento | Conteúdo |
|---|---|
| `<nav>` | Logo Yousense + botão "Iniciar tratamento" fixo no topo |
| `#hero` | Headline principal, pills de benefícios, placeholder do produto, badges flutuantes |
| `#ugc` | Grid de vídeos UGC (base64 embutidos) — rotina de aplicação |
| `#trust-bar` | Barra de trust icons (fórmula exclusiva, sem hormônios, frete grátis) |
| `#antes-depois` | Espaço para imagens antes/depois — atualmente com placeholders |
| `#tratamento` | O que é o FORBROW: grid de 3 objetivos (estimular, fortalecer, preencher) |
| `#oferta` | Kits de compra: Essencial (1 un), Completo (2 un, destaque), Trio (3 un) |
| `#abordagem` | Abordagem vs procedimentos invasivos — lista de diferenciais + grid de imagens lifestyle |
| `#drone` | Tecnologia Drone Capil Boost — 3 cards: Anagen Activator, Keratin Anchor, Scalp Shield |
| `#ativos` | Ativos principais: Redensyl, Anagain, Procapil, Pantenol, Biotina |
| `#composicao` | Lista INCI completa colapsável (accordion) |
| `#resultados` | Timeline de resultados: 7 dias → 30 dias → 60 dias → 90 dias |
| `#prova-social` | Reviews reais + placeholders para antes/depois de clientes |
| `#diferenciais` | Tabela comparativa: FORBROW vs micropigmentação vs concorrentes |
| `#garantia` | Garantia de 30 dias |
| `#faq` | FAQ com accordion — 10 perguntas (+ 4 extras colapsáveis) |
| `#cta-final` | CTA final com card de oferta destacada |
| `#sticky-cta` | Barra fixa no mobile que aparece após o hero |
| `<footer>` | Marca + copyright + disclaimer legal |

---

## Design system

- **Paleta:** fundo preto (`#0A0A0A`), superfície escura (`#111110`), verde musgo (`#3D4A38`), cobre (`#B87A52`), branco off-white (`#F5F5F0`)
- **Tipografia:** Cormorant Garamond (display/headlines) + Inter (corpo)
- **Animações:** `.reveal` com IntersectionObserver para fade-in ao scroll; barra de progresso de scroll no topo

---

## Estado atual (Jun 2025)

- Imagens de produto e lifestyle são **placeholders** — o `product-frame` no hero exibe um mock tipográfico
- Imagens antes/depois são **placeholders** com `border: dashed`
- Vídeos UGC estão **embutidos como base64** diretamente no HTML (isso torna o arquivo pesado ~19MB)
- Reviews reais já existem em `#prova-social` mas algumas cards ainda são placeholders
- Preços: Essencial R$123 (1×), Completo R$149/un 2× = R$298, Trio R$139/un 3× = R$417

---

## Próximas melhorias sugeridas

- Substituir vídeos base64 por arquivos externos (`.mp4`) para reduzir o peso do `index.html`
- Adicionar imagens reais de produto no `#hero` e `#antes-depois`
- Revisar ordem das sections para melhor fluxo de conversão
- Adicionar pixel/rastreamento (Meta Pixel, GA4)
