let places = [
    {
        name:`Fundacja: Dbam o Zdrowie`,
        id: 1,
        type: `Fundacja`,
        description: `Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
        staff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    {
        name:`Fundacja: Dla dzieci`,
        id: 2,
        type: `Fundacja`,
        description: `Cel i misja: Pomoc dzieciom z ubogich rodzin.`,
        staff: "ubrania, meble, zabawki",
    },
    {
        name:`Fundacja “Bez domu”`,
        id: 3,
        type: `Fundacja`,
        description: `Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.`,
        staff: "ubrania, jedzenie, ciepłe koce",
    },
    {
        name:`Fundacja: Dbam o Zycie`,
        id: 4,
        type: `Fundacja`,
        description: `Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
        staff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    {
        name:`Fundacja: Dla seniora`,
        id: 5,
        type: `Fundacja`,
        description: `Cel i misja: Pomoc seniorom.`,
        staff: "ubrania, meble, jedzenie",
    },
    {
        name:`Fundacja: Dla Ciebie`,
        id: 6,
        type: `Fundacja`,
        description: `Cel i misja:  Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
        staff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    {
        name:`Fundacja: Dbam o Zdrowie`,
        id: 7,
        type: `Fundacja`,
        description: `Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.`,
        staff: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
    },
    {
        name:`Fundacja: zgłębi serca`,
        id: 8,
        type: `Fundacja`,
        description: `Cel i misja: Pomoc dzieciom z ubogich rodzin.`,
        staff: "ubrania, meble, zabawki",
    },

    {
        name:`Organizacja “Lorem Ipsum 1”`,
        id: 101,
        type: `Organizacja`,
        description: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
        staff: "Egestas, sed, tempus",
    },
    {
        name:`Organizacja “Lorem Ipsum 2”`,
        id: 102,
        type: `Organizacja`,
        description: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.`,
        staff: "Ut, aliquam, purus, sit, amet",
    },
    {
        name:`Organizacja “Lorem Ipsum 3”`,
        id: 103,
        type: `Organizacja`,
        description: `Scelerisque in dictum non consectetur a erat nam.`,
        staff: "Mi, quis, hendrerit, dolor",
    },
    {
        name:`Organizacja “Lorem Ipsum 4”`,
        id: 104,
        type: `Organizacja`,
        description: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
        staff: "Egestas, sed, tempus",
    },
    {
        name:`Organizacja “Lorem Ipsum 5”`,
        id: 105,
        type: `Organizacja`,
        description: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.`,
        staff: "Ut, aliquam, purus, sit, amet",
    },
    {
        name:`Organizacja “Lorem Ipsum 6”`,
        id: 106,
        type: `Organizacja`,
        description: `Scelerisque in dictum non consectetur a erat nam.`,
        staff: "Mi, quis, hendrerit, dolor",
    },

    {
        name:`Zbiórka “Lorem Ipsum 1”`,
        id: 201,
        type: `Zbiórka`,
        description: `Quis varius quam quisque id diam vel quam elementum pulvinar.`,
        staff: "Egestas, sed, tempus",
    },
    {
        name:`Zbiórka “Lorem Ipsum 2”`,
        id: 202,
        type: `Zbiórka`,
        description: `Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.`,
        staff: "Ut, aliquam, purus, sit, amet",
    },
    {
        name:`Zbiórka “Lorem Ipsum 3”`,
        id: 203,
        type: `Zbiórka`,
        description: `Scelerisque in dictum non consectetur a erat nam.`,
        staff: "Mi, quis, hendrerit, dolor",
    },

];

export function getPlaces() {
    return places;
}

export function getPlace(id) {
    return places.find(
        place => place.id === id
    );
}
