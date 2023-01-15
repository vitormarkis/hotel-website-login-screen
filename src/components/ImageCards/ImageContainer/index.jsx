export const ImageContainer = ({children, column}) => (
    <div className={`${column ? 'flex flex-col gap-6' : ''} flex basis-0 grow justify-center items-center`}>{children}</div>
);
