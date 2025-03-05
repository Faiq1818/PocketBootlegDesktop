function App() {
  return (
    <>
      <div className="text-center bg-black p-4">
        <h2 className="font-bold text-xl text-white">PocketBootleg</h2>
      </div>
      <div className="text-center flex flex-col items-center justify-center min-h-screen">
        <h2 className="font-bold text-xl mb-7">Menu Absen</h2>

        <div className="flex flex-col gap-6 w-64 mt-4">
          <input type="text" className="bg-gray-200 p-3 rounded-xl" placeholder="Masukan NIM" />
          <input type="text" className="bg-gray-200 p-3 rounded-xl" placeholder="Masukan NIM" />
        </div>

        <button className="bg-gray-800 text-white mt-6 py-3 px-10 rounded-xl">Absen</button>
      </div>
    </>
  )
}

export default App
