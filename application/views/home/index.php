<div class="container">
    <section class="blog">
        <div>Latest blog posts</div>
        <ul>
            <?php
            foreach ($blog as $b)
            {
                $this->load->view("partials/blog", $b);
            }
            ?>
        </ul>
    </section>

    <section class="social">
        <div>Twitter</div>
        <ul class="twitter">
            <?php
            foreach ($timeline as $t)
            {
                $this->load->view("partials/twitter", $t);
            }
            ?>
        </ul>
    </section>
</div>
<hr/>