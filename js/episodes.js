document.addEventListener('DOMContentLoaded', function() {
    const seasons = {
        season1: [
            {
                number: 1,
                title: "O Fim e o Começo",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/G6Q49X99R/the-end--the-beginning"
            },
            {
                number: 2,
                title: "Clube de Vôlei do Ensino Médio Karasuno",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GYWEMPM2Y/karasuno-high-school-volleyball-club"
            },
            {
                number: 3,
                title: "O Melhor Ataque",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-3-the-best-attack-784550"
            },
            {
                number: 4,
                title: "O Time",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-4-the-team-784551"
            },
            {
                number: 5,
                title: "Um Time Forte",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-5-a-strong-team-784552"
            },
            {
                number: 6,
                title: "Um Time Interessante",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-6-an-interesting-team-784553"
            },
            {
                number: 7,
                title: "Versus Grande Rei",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-7-versus-great-king-784554"
            },
            {
                number: 8,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-8-the-team-called-monster-784555"
            },
            {
                number: 9,
                title: "Um Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-9-a-team-called-monster-784556"
            },
            {
                number: 10,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-10-a-team-called-monster-784557"
            },
            {
                number: 11,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-11-a-team-called-monster-784558"
            },
            {
                number: 12,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-12-a-team-called-monster-784559"
            },
            {
                number: 13,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-13-a-team-called-monster-784560"
            },
            {
                number: 14,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-14-a-team-called-monster-784561"
            },
            {
                number: 15,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-15-a-team-called-monster-784562"
            },
            {
                number: 16,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-16-a-team-called-monster-784563"
            },
            {
                number: 17,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-17-a-team-called-monster-784564"
            },
            {
                number: 18,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-18-a-team-called-monster-784565"
            },
            {
                number: 19,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-19-a-team-called-monster-784566"
            },
            {
                number: 20,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-20-a-team-called-monster-784567"
            },
            {
                number: 21,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-21-a-team-called-monster-784568"
            },
            {
                number: 22,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-22-a-team-called-monster-784569"
            },
            {
                number: 23,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-23-a-team-called-monster-784570"
            },
            {
                number: 24,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-24-a-team-called-monster-784571"
            },
            {
                number: 25,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-25-a-team-called-monster-784572"
            }
        ],
        season2: [
            {
                number: 1,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-26-a-team-called-monster-784573"
            },
            {
                number: 2,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-27-a-team-called-monster-784574"
            },
            {
                number: 3,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-28-a-team-called-monster-784575"
            },
            {
                number: 4,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-29-a-team-called-monster-784576"
            },
            {
                number: 5,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-30-a-team-called-monster-784577"
            },
            {
                number: 6,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-31-a-team-called-monster-784578"
            },
            {
                number: 7,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-32-a-team-called-monster-784579"
            },
            {
                number: 8,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-33-a-team-called-monster-784580"
            },
            {
                number: 9,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-34-a-team-called-monster-784581"
            },
            {
                number: 10,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-35-a-team-called-monster-784582"
            },
            {
                number: 11,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-36-a-team-called-monster-784583"
            },
            {
                number: 12,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-37-a-team-called-monster-784584"
            },
            {
                number: 13,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-38-a-team-called-monster-784585"
            },
            {
                number: 14,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-39-a-team-called-monster-784586"
            },
            {
                number: 15,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-40-a-team-called-monster-784587"
            },
            {
                number: 16,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-41-a-team-called-monster-784588"
            },
            {
                number: 17,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-42-a-team-called-monster-784589"
            },
            {
                number: 18,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-43-a-team-called-monster-784590"
            },
            {
                number: 19,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-44-a-team-called-monster-784591"
            },
            {
                number: 20,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-45-a-team-called-monster-784592"
            },
            {
                number: 21,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-46-a-team-called-monster-784593"
            },
            {
                number: 22,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-47-a-team-called-monster-784594"
            },
            {
                number: 23,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-48-a-team-called-monster-784595"
            },
            {
                number: 24,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-49-a-team-called-monster-784596"
            },
            {
                number: 25,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-50-a-team-called-monster-784597"
            },
            {
                number: 26,
                title: "O Time Chamado Monstro",
                thumbnail: "./assets/haikyuu-image-ep.jpg",
                url: "https://www.crunchyroll.com/pt-br/watch/GY8VM8MWY/haikyu/episode-50-a-team-called-monster-784597"
            }
        ]
    };

    const episodesGrid = document.querySelector('.episodes-grid');
    const seasonSelect = document.querySelector('.season-select');
    let currentSeason = 'season1';

    function createEpisodeCards(episodes) {
        // Limpar grid existente
        episodesGrid.innerHTML = '';
        
        // Criar novos cards
        episodes.forEach(episode => {
            const episodeCard = document.createElement('div');
            episodeCard.className = 'episode-card';
            episodeCard.innerHTML = `
                <div class="episode-number">Episódio ${episode.number}</div>
                <div class="episode-title">${episode.title}</div>
                <div class="episode-thumbnail">
                    <img src="${episode.thumbnail}" alt="Episódio ${episode.number}">
                    <div class="play-overlay">
                        <span class="play-icon">▶</span>
                    </div>
                </div>
            `;

            const playButton = episodeCard.querySelector('.play-overlay');
            playButton.addEventListener('click', (e) => {
                e.stopPropagation();
                window.open(episode.url, '_blank');
            });

            episodesGrid.appendChild(episodeCard);
        });
    }

    // Função para alternar entre temporadas
    function switchSeason(season) {
        currentSeason = season;
        createEpisodeCards(seasons[season]);
    }

    // Adicionar evento ao select de temporada
    seasonSelect.addEventListener('change', (e) => {
        switchSeason(e.target.value);
    });

    // Inicializar com a primeira temporada
    createEpisodeCards(seasons.season1);
}); 