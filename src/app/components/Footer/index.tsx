export default function Footer() {
  return (
    <footer className="flex border-t-1 mt-100 text-gray-400 border-gray-400 px-5 h-17 items-center justify-center">
      <div className="mr-auto w-50 ">
        <img className="w-auto mb-1.5 h-6" src="/footer/footer_sase_logo.png"></img>
        <img className="w-auto h-5" src="/footer/footer_sjsu_logo.png"></img>
      </div>

      <p style={{fontSize: "medium"}} className="text-center w-fit">
        San Jose State University​, 1 Washington Sq, San Jose, CA 
        <br/>SASE at SJSU © 2025
      </p>

      <p style={{fontSize: "medium"}} className="text-right ml-auto w-50">
        made with 💙💚
        <br/> SASE SJSU webdev team
      </p>
    </footer>
  )
}