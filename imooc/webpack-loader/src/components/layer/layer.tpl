<div class="layer">
	<img src="${ require('../../assets/2.png') }" />
  <div> this is layer <%= name %> layer</div>
  <% for (var i=0; i < arr.length; i++) { %>
  	<%= arr[i] %>
  <% } %>
</div>