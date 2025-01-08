import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import Link from "next/link";
import { Search } from "lucide-react";

const SearchForm = ({query}: {query?: string}) => {
  return (
    <>
        <Form action="/" className="search-form">
            <input
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder="Search Startups"
            />

            <div className="flex gap-2">
                {query && <SearchFormReset/>}

                <button type="submit" className="search-btn text-white">
                    <Link href="/" className="search-btn text-white">
                        <Search/>
                    </Link>
                </button>
            </div>

        </Form>
    </>
  )
}

export default SearchForm