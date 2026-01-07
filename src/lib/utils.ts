// Helpers utilitaires
export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("fr-FR").format(date);
}
