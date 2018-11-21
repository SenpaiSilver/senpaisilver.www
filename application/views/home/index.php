<section class="home">

    <ul class="twitter">
    <?php foreach ($timeline as $t): ?>
        <li>
            <p><?=$t->text_html?></p>
            <a href="<?=$t->link?>" rel="nofollow">Link</a>
            <span class="icon twitter"></span>
        </li>
    <?php endforeach; ?>
    </ul>

    <ul class="blog">
    <?php foreach ($blog as $b): ?>
        <li>
            <span class="icon newspaper"><a href="<?=$b->link?>"><?=$b->title->rendered?></a></span>
            <?=$b->excerpt->rendered?>
            <a href="<?=$b->link?>">Read more</a>
        </li>
    <?php endforeach; ?>
    </ul>

    <!-- <?php var_dump($timeline); ?> -->
    <!-- <?php var_dump($blog); ?> -->

    <?php $this->load->view("base/menu"); ?>

    <?php /*$this->load->view("home/partial_twitter");*/ ?>

</section>