type CardProps = {
  title: string;
  content: string;
  url?: string;
};
export const Card = (children: CardProps) => {
  return (
    <a href="#" className="darkCard block max-w-sm p-6 rounded-lg shadow ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {children.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {children.content}
      </p>
    </a>
  );
};
