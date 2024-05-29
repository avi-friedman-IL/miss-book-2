const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"
import { BookDetails } from "./pages/BookDetails.jsx"
import { BookEdit } from "./pages/BookEdit.jsx"
import { AddReview } from "./cmps/AddReview.jsx"
import { UserMsg } from "./cmps/UserMsg.jsx"
import { AddBook } from "./pages/AddBookIndex.jsx"



export function RootCmp() {
    return (
        <Router>
            <AppHeader />
            <main className="content-grid">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book" element={<BookIndex />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/book/add" element={<AddBook />} />
                    <Route path="/book/edit" element={<BookEdit />} />
                    <Route path="/book/edit/:bookId" element={<BookEdit />} />
                    <Route path="/book/:bookId" element={<BookDetails />} />
                    <Route path="/book/:bookId/review" element={<AddReview />} />
                </Routes>
            </main>
            <UserMsg />
        </Router>
    )
}