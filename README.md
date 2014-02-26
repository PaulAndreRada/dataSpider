
<i>* This project its in its infancy and is not yet extensive enough to be used as a plugin, but if you contribute to it, it will be. </i>

<h3> Control basic jQuery methods without touching javascript </h3>

By adding simple data tags you can control jQuery methods to trigger on specific elements using only css style accessors.

<h5> Toggle elements through ids </h5> 
```
<a href=“#” data-spider-onClick-toggle=“#list” > 
   toggleList
</a>

<ol id=“list”> 
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ol>

```

<h5> Combine methods to create detailed effects </h5>
```
<a href=“#” data-spider-onMouseOver-fadeIn=“#list” 
   data-spider-onMouseOut-fadeOut=“#list”> 
   show list
</a>

<ol id=“list”> 
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ol>

```