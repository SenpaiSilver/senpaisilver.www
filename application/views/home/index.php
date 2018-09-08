<section class="home">
    <ul class="badges">
        <?php foreach ($badges_url as $title => $url): ?>

        <li>
            <?php
                $background = "bg";

                if (file_exists(FCPATH."/assets/img/".strtolower($title).".png"))
                {
                    $background .= "-".strtolower($title);
                }
            ?>

            <a href="<?=$url?>" class="<?=$background?>">
                <span><?=$title?></span>
            </a>
        </li>
        <?php endforeach; ?>
    </ul>
</section>