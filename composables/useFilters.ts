export const useFilters = () => {
  const i18n = useI18n();
  const formatDate = (date: string) => {
    const _d = new Date(date);
    const _parts = new Intl.DateTimeFormat(i18n.locale.value, {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).formatToParts(_d);
    return Object.fromEntries(_parts.map((p) => [p.type, p.value]));
  };
  const longDate = (date: string) => {
    const _d = new Date(date);
    return new Intl.DateTimeFormat(i18n.locale.value, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(_d);
  };

  return {
    formatDate,
    longDate,
  };
};
