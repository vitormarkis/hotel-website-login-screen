export const Image = ({ src, alt }) => (
    <img
        className="w-36 h-36 object-cover shadow-xl border border-neutral-800 shadow-neutral-800/60"
        src={src}
        alt={alt}
    />
);
