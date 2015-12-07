$(function() {
	
	
	var Message = function(element) {
		var $raw = $(element)
		this.contact = $raw.attr('contact_name')
		this.body = $raw.attr('body')
		this.number = $raw.attr('address')
		this.date = new Date($raw.attr('date'))
		this.readableDate = $raw.attr('readable_date')
		this.incomingMessage = $raw.attr('type') == "1"
	}

	var messages = []
	var processMessage = function(element) {
		var message = new Message(element)
		messages.push(message)
	}
	
	d3.xml('data/sms-20151206163812.xml', function(error, xml) {
		if (error) { return } 
		
		console.log("success")
		
		var rawMessages = xml.documentElement.getElementsByTagName('sms')
		_.each(rawMessages, function(messageElement) {
			processMessage(messageElement)
		})
		displayAllConversations()
	})
	
	var displayAllConversations = function() {
		d3.select('#messages')
				.selectAll('div')
				.data(messages)
				.enter().append('div')
				.html(function(message) {
					var $div = $('<div>')
					$div.addClass('message')
							.addClass(message.incomingMessage ? 'received' : 'sent')
							.addClass('conversation-' + message.contact.replace('\\s', '_'))
					var $meta = $('<div>')
							.addClass('message-meta')
							.addClass(message.incomingMessage ? 'received' : 'sent')
							.appendTo($div)
					$('<span>')
							.addClass('message-sender')
							.text(message.incomingMessage ? message.contact : 'Me')
							.appendTo($meta)
					$('<span>')
							.addClass('message-date')
							.text(message.readableDate)
							.appendTo($meta)
					$('<div>')
							.addClass('message-body')
							.text(message.body)
							.appendTo($div)
					
					return $div[0].outerHTML;
				})
	}
})