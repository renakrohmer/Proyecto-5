function Header() {
  return (
    <>
      <div className="bg-indigo-600 px-4">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center">
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-md bg-indigo-800 px-6 py-3 text-lg font-semibold text-white"
              >
                Random Facts for YOU!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
