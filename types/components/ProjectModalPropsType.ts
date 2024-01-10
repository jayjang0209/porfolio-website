export type ProjectModalProps = {
  title: string;
  description: string;
  tags: readonly string[];
  tasks: readonly string[];
  onClose: () => void;
};