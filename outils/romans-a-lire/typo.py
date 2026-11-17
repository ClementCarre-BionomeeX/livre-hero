# Normalisation typographique commune (alignée sur les autres livres du dépôt : apostrophe droite, espaces simples
# avant ; : ? ! », après «, points de suspension en un signe, tiret de dialogue « — »).
import re
def typo(p):
    p = p.replace('’', "'").replace('‘', "'").replace(' ', ' ').replace(' ', ' ')
    p = p.replace('...', '…').replace('. . .', '…')
    p = re.sub(r'^\s*--\s*', '— ', p)
    p = re.sub(r'\s*--\s*', ' — ', p)
    p = p.replace('“', '« ').replace('”', ' »')
    p = re.sub(r'\s*([;:?!»])', r' \1', p)
    p = re.sub(r'([;:?!])\s*(?=[;:?!])', r'\1', p)  # « ?! » restent collés
    p = re.sub(r'«\s*', '« ', p)
    p = re.sub(r' +', ' ', p).strip()
    # « : » collé aux heures ou aux références (12:30) : rare chez nos auteurs, on remet
    p = re.sub(r'(\d) : (\d)', r'\1:\2', p)
    p = p.replace('( ', '(').replace(' )', ')')
    return p
