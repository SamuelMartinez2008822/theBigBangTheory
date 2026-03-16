export interface Cast {
    person: {
        name: string;
        country: {
            name: string;
            code: string;
        }
        birthday: string;
        deathday: string;
        gender: string;
        image: {
            original: string;
        }
    }

    character: {
        name: string;
    }
}