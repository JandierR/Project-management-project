export default function Sidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul className="mt-8"></ul>
    </aside>
  );
}

/*Here I need to write the Sidebar code (check the final result from the first lecture in Udemy) 
    I looked into it and found out the use of <aside>, I don't know how it works, but I can look it up in Google.
    Also, I saw I can use <nav> for the sidebar items, maybe with <ul> <li>.
    Tomorrow tuesday, I have to work this feature from the app and make sure its behavior from the final result. 
    Remember, it is important to make this without help, but it also good to learn while inquiring, in case I'm stuck and don't know how something works
  
*/
