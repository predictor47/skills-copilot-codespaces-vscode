function skillsMember() {
    // This is a private function
    function privateFunction() {
        console.log('I am a private function');
    }

    // This is a public function
    this.publicFunction = function() {
        console.log('I am a public function');
    }
}