import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Blog from "./pages/Blog"
import Signin from "./pages/Signin"
import CreateBlog from "./pages/CreateBlog"
import DisplayBlogs from "./pages/DisplayBlogs"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blogread/:id" element={<DisplayBlogs />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
