type ProjectsNavigationProps = {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
}
const ProjectsNavigation = ({currentCategory, onCategoryChange}: ProjectsNavigationProps) => {
  const categories = ['전체', '공연', '전시', '박물관', '미술관', '다이닝', '캐릭터'];

  return (
    <div className="hidden sm:flex sm:justify-center sm:gap-14 sm:text-lg sm:pb-12 sm:pt-12">
      {categories.map((category) => (
        <p
          key={category}
          className={`cursor-pointer ${
            currentCategory === category ? "font-bold" : ""
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </p>
      ))}
    </div>
  );
}

export default ProjectsNavigation;