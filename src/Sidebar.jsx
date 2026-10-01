export default function Sidebar({ onButtonClick }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div className="flex items-center gap-4">
        <button
          onClick={onButtonClick}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul className="mt-8"></ul>
    </aside>
  );
}

// const btn = document.getElementById('myBtn');

// btn.addEventListener('click', function () {
//   document.getElementById('myBtn').innerHTML = 'it work';
// });

/*The visual part was finished. Now I just need to add the behavior, 
so I need to see if this part is from the same lecture or the next, anyways, I have to do it.  */
