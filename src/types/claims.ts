export interface claim {
  _id: string;
  title: string;
  type: null | {
    name: string;
    slug: string;
  };
  status: {
    name: string;
    slug: string;
  };
  user: string;
  createdAt: string;
  updatedAt: string;
  description: string;
}
