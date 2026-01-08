import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { pixelAvatars, PixelAvatar } from "@/lib/pixelAvatars";
import { ScrollArea } from "@/components/ui/scroll-area";

interface AvatarPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (avatarId: string) => void;
  currentAvatarId?: string;
}

const AvatarPicker = ({ open, onClose, onSelect, currentAvatarId }: AvatarPickerProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<string | undefined>(currentAvatarId);

  // Filter avatars based on search (could be extended to search by colors, style, etc.)
  const filteredAvatars = pixelAvatars.filter((avatar) => {
    if (!searchQuery) return true;
    return avatar.id.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSelect = (avatarId: string) => {
    setSelectedAvatar(avatarId);
  };

  const handleConfirm = () => {
    if (selectedAvatar) {
      onSelect(selectedAvatar);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="font-display text-2xl">Choose Your Avatar</DialogTitle>
          <p className="text-muted-foreground text-sm mt-2">
            Select a pixel art avatar from our collection of {pixelAvatars.length} unique designs
          </p>
        </DialogHeader>

        {/* Search Bar */}
        <div className="px-6 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search avatars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Avatar Grid */}
        <ScrollArea className="h-[500px] px-6">
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-3 pb-6">
            <AnimatePresence mode="popLayout">
              {filteredAvatars.map((avatar, index) => (
                <motion.button
                  key={avatar.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.01 }}
                  onClick={() => handleSelect(avatar.id)}
                  className={`
                    relative aspect-square rounded-lg overflow-hidden
                    border-2 transition-all duration-200
                    hover:scale-110 hover:z-10 hover:shadow-lg
                    ${
                      selectedAvatar === avatar.id
                        ? "border-primary ring-2 ring-primary ring-offset-2 scale-105"
                        : "border-border/50 hover:border-primary/50"
                    }
                  `}
                >
                  <div
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{ __html: avatar.svg }}
                  />
                  {selectedAvatar === avatar.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-primary-foreground"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {filteredAvatars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No avatars found matching your search</p>
            </div>
          )}
        </ScrollArea>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-border/50 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {selectedAvatar ? "Avatar selected" : "Select an avatar to continue"}
          </p>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={!selectedAvatar}
              className="gradient-primary text-primary-foreground"
            >
              Confirm Selection
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AvatarPicker;
