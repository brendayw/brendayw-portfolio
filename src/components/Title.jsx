export default function Title( { titulo = '', className = '' }) {
    return (
        <div className="w-full">
            <h2 className={`font-medium font-montserrat text-5xl ${className} text-[#CAC426]`}>
                {titulo}
            </h2>
        </div>
    );
}