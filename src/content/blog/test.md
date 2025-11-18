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
yes, they are made by the same people
</pre>
FA dumpster fire
<i class="fa-duotone fa-solid fa-dumpster-fire"></i>

FA colored dumpster fire
<i class="fa-duotone fa-solid fa-dumpster-fire" style="--fa-primary-color: #ff4013; --fa-secondary-color: #000000;"></i>

FA spinning colored dumpster fire
<i class="fa-duotone fa-solid fa-dumpster-fire fa-spin" style="--fa-primary-color: #ff4013; --fa-secondary-color: #000000;"></i>

FA lucide color brick wall <i class="fa-kit fa-lucite-brick-wall-fire" style="color: #e32400;"></i> (yes i copied and pasted the SVG into font awesome from lucide)

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


