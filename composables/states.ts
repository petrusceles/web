export const useLoading = () => {
  return useState<boolean>("loading", () => true);
};
