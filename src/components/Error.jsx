// eslint-disable-next-line react/prop-types
function Error({message}) {
    return (
        <p className="text-xl text-center font-semibold text-red-500 mt-4">
            {message}
        </p>
    );
}
export default Error;
