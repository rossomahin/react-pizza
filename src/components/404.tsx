import Header from "./Header";

function PageNotFound() {
  return (
    <>
      <Header />
      <hr className="border border-[#F9F9F9] w-[95%] mx-auto rounded-4xl my-5" />
      <div className="flex flex-col justify-center mx-auto text-center h-[70vh]">
        <h1 className="sm:text-8xl text-2xl font-extrabold">Error 404</h1>
        <h2 className="sm:text-6xl text-xl font-bold">Page not found</h2>
        <h3 className="sm:text-4xl text-xs font-medium">
          Возможно вы ввели неверный адрес
        </h3>
      </div>
    </>
  );
}

export default PageNotFound;
