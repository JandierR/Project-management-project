export default function NewProject() {
  return (
    <ul className="p-4 mt-8 rounded-md bg-stone-100">
      <img src="public\logo.png" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
        Create new project
      </button>
    </ul>
  );
}
