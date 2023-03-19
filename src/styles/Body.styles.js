import styled from "styled-components";

export const BodySection = styled.section`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: grid;
    grid-template-column: 100%;
    grid-template-rows: 35% 35% 30%;

    .pokeInfo {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 100%;
        h2 {
            font-size: 0.9rem;
        }
    }

    .abilities,
    .forms,
    .heldItems,
    .moves,
    .types,
    .sprite {
        text-align: center;
        font-size: 0.8rem;
        grid-rows: 1 / 2;
    }

    .movesList {
        height: calc(100% - 4rem);
        overflow-y: auto;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .spriteContainer {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .spriteImgContainer {
        width: 5rem;
        height: 5rem;
        text-align: center;
        transform: rotate(45deg);
        border: 2px solid black;
    }

    .spriteImg {
        transform: rotate(-45deg);
        width: 5rem;
    }
    .spriteName {
        margin-bottom: 0;
        margin-top: 0;
    }

    .spritesCarousel {
        grid-column: 1 / 2;
        grid-rows: 3 / 4;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .spriteImgCar {
        width: 6rem;
    }
`;
