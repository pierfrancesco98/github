
const useTimeAgo = () => {
  const timeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);

    const diffMs = now - date;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 30) return `${diffDays} giorni fa`;

    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths < 12) return `${diffMonths} mesi fa`;

    const diffYears = Math.floor(diffMonths / 12);
    return `${diffYears} anni fa`;
  };

  return { timeAgo };
};

export default useTimeAgo;