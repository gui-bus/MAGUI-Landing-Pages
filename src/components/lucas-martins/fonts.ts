import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono } from "next/font/google";
export const lucasDisplay = Cormorant_Garamond({ subsets:["latin"], weight:["400","500","600","700"], style:["normal","italic"], display:"swap", variable:"--font-lucas-display" });
export const lucasText = DM_Sans({ subsets:["latin"], weight:["400","500","600"], display:"swap", variable:"--font-lucas-text" });
export const lucasMono = IBM_Plex_Mono({ subsets:["latin"], weight:["400"], display:"swap", variable:"--font-lucas-mono" });

