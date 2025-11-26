---
title: 'This is a test'
description: 'HIIII'
pubDate: 'Nov 17 2025'
heroImage: '/blog-placeholder-3.jpg'
---


hey, this is a test page. im just checking if stuff loads. carry on with your day now
<pre>
FA = Font Awesome
WA = Web Awesome
SL = Shoelace
</pre>
FA dumpster fire
<i class="fa-duotone fa-solid fa-dumpster-fire"></i>

FA colored dumpster fire
<i class="fa-duotone fa-solid fa-dumpster-fire" style="--fa-primary-color: #ff4013; --fa-secondary-color: #000000;"></i>

FA spinning colored dumpster fire
<i class="fa-duotone fa-solid fa-dumpster-fire fa-spin" style="--fa-primary-color: #ff4013; --fa-secondary-color: #000000;"></i>

FA lucide color brick wall <i class="fa-kit fa-lucite-brick-wall-fire" style="color: #e32400;"></i> (yes i copied and pasted the SVG into font awesome from lucide)

FA Cube
<i class="fa-solid fa-cube fa-2xl" style="color: #ffa200;"></i>

WA Button
<wa-button variant="neutral">Neutral</wa-button>
<wa-button variant="brand">Brand</wa-button>
<wa-button variant="success">Success</wa-button>
<wa-button variant="warning">Warning</wa-button>
<wa-button variant="danger">Danger</wa-button>

WA drawer
<wa-drawer label="Drawer" id="drawer-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <wa-button slot="footer" variant="brand" data-drawer="close">Close</wa-button>
</wa-drawer>

<wa-button>Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('#drawer-overview');
  const openButton = drawer.nextElementSibling;

  openButton.addEventListener('click', () => (drawer.open = true));
</script>

WA / FA Rating
<wa-rating label="Rating" class="rating-hearts" style="--symbol-color-active: #ff4136;"></wa-rating>

<script type="module">
  const rating = document.querySelector('.rating-hearts');

  await customElements.whenDefined('wa-rating');
  await rating.updateComplete;

  rating.getSymbol = () => '<wa-icon name="fire" variant="duotone"></wa-icon>';
</script>

WA / FA cube
<wa-icon name="cube" style="font-size: 2em; color: #ffa200;"></wa-icon>

WA progress bar
<wa-progress-bar indeterminate></wa-progress-bar>

SL button
<sl-button variant="default">Default</sl-button>
<sl-button variant="primary">Primary</sl-button>
<sl-button variant="success">Success</sl-button>
<sl-button variant="neutral">Neutral</sl-button>
<sl-button variant="warning">Warning</sl-button>
<sl-button variant="danger">Danger</sl-button>3

</script>

