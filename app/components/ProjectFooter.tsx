import { Dispatch, SetStateAction } from "react"

interface ProjectFooterProps {
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    totalItems: number;
    itemsPerPage: number;
}

const ProjectFooter = ({ currentPage, setCurrentPage, totalItems, itemsPerPage }: ProjectFooterProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return (
        <footer className="hidden sm:block w-full sm:mb-12">
            <div className="flex justify-center items-center gap-4 py-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`
                            w-2 h-2 
                            ${currentPage === pageNum 
                                ? 'w-8 h-[2px] bg-black' 
                                : 'rounded-full bg-black'
                            }
                        `}
                        aria-label={`Page ${pageNum}`}
                    />
                ))}
            </div>
        </footer>
    )
}

export default ProjectFooter;
