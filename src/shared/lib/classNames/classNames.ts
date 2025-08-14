type Mods = Record<string, string | boolean>

type ClassNames = {
    cls: string;
    mods: Mods;
    additional: string[];
}

export function classNames(props: ClassNames): string {

    const {cls, mods = {}, additional = []} = props;

    return [
        cls,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
        ...additional,
    ].join(' ');
}