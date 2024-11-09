import { ITag } from "@/src/entities";

export type Props = {
    tags: ITag[]; 
    selectedTags: string[];
    setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}